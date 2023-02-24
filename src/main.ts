import * as core from '@actions/core'
import {Twilio} from 'twilio'

const run = async () => {
  const from = core.getInput('from')
  // open issue for getting a list input. can use multiline though
  // https://github.com/actions/toolkit/issues/184
  const sendTo = core.getMultilineInput('to')
  const body = core.getInput('body')
  const mediaUrl = core.getMultilineInput('mediaUrl')
  const accountSid =
    core.getInput('TWILIO_ACCOUNT_SID') || process.env.TWILIO_ACCOUNT_SID
  const authToken =
    core.getInput('TWILIO_AUTH_TOKEN') || process.env.TWILIO_AUTH_TOKEN
  const createOpts = core.getInput('TWILIO_OPTS') || process.env.TWILIO_OPTS
  const clientOpts =
    core.getInput('TWILIO_CLIENT_OPTS') || process.env.TWILIO_CLIENT_OPTS

  if (!body.length && !mediaUrl.length) {
    const msg = 'Bad Request: message and media cannot both be undefined'
    core.error(msg)
    core.setFailed(msg)
  }

  const client = new Twilio(
    accountSid!,
    authToken!,
    !!clientOpts && JSON.parse(clientOpts)
  )

  core.setCommandEcho(true)
  const promises = sendTo.map(async (to: string) => {
    const resultMessage = await client.messages.create({
      from,
      to,
      sendAsMms: !!mediaUrl.length,
      ...(body.length && {body}),
      ...(mediaUrl.length && {mediaUrl}),
      ...(createOpts && JSON.parse(createOpts))
    })

    core.setOutput('messageSid', resultMessage.sid)

    return resultMessage
  })
  return Promise.allSettled(promises)
}

export const execute = async () => {
  try {
    return await run()
  } catch (e) {
    if (e instanceof EvalError) {
      core.error(`Failed to send message: ${e.message}`)
      core.setFailed(e.message)
    }
  }
}

execute()
