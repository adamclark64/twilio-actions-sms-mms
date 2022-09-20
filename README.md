# Twilio Actions MMS SMS
Github action to send SMS andMMS notifications with Twilio

 ## usage

### basic
 ```yml
      uses: adamclark64/twilio-actions-sms-mms@v1
      with:
        body: text portion of notification
        mediaUrl: https://m.media-amazon.com/images/M/MV5BMjA3MjQ4NTMyNF5BMl5BanBnXkFtZTcwMTM3NDk0NA@@._V1_.jpg
        from: +8008675309
        to: +8008675309
      env:
        TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
        TWILIO_AUTH_TOKEN: ${{ secrets.TWILIO_AUTH_TOKEN 
 ```
 ### just media
  ```yml
      uses: adamclark64/twilio-actions-sms-mms@v1
      with:
        mediaUrl: https://m.media-amazon.com/images/M/MV5BMjA3MjQ4NTMyNF5BMl5BanBnXkFtZTcwMTM3NDk0NA@@._V1_.jpg
        from: +8008675309
        to: +8008675309
      env:
        TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
        TWILIO_AUTH_TOKEN: ${{ secrets.TWILIO_AUTH_TOKEN 
 ```
 ### just text
  ```yml
      uses: adamclark64/twilio-actions-sms-mms@v1
      with:
        body: text portion of notification
        from: +8008675309
        to: +8008675309
      env:
        TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
        TWILIO_AUTH_TOKEN: ${{ secrets.TWILIO_AUTH_TOKEN 
 ```
 ### multiple recipients (multiple notifications)
  ```yml
       uses: adamclark64/twilio-actions-sms-mms@v1
      with:
        body: text portion of notification
        mediaUrl: https://m.media-amazon.com/images/M/MV5BMjA3MjQ4NTMyNF5BMl5BanBnXkFtZTcwMTM3NDk0NA@@._V1_.jpg
        from: +8008675309
        to: |
          +8008675309
          +8008675309
      env:
        TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
        TWILIO_AUTH_TOKEN: ${{ secrets.TWILIO_AUTH_TOKEN 
 ```
 ### Twilio client Options `TWILIO_CLIENT_OPTS`. Can be passed as input OR env var - https://github.com/twilio/twilio-node/blob/main/lib/rest/Twilio.d.ts#L167
  ```yml
      uses: adamclark64/twilio-actions-sms-mms@v1
      with:
        body: text portion of notification
        mediaUrl: https://m.media-amazon.com/images/M/MV5BMjA3MjQ4NTMyNF5BMl5BanBnXkFtZTcwMTM3NDk0NA@@._V1_.jpg
        from: +8008675309
        to: +8008675309
        TWILIO_CLIENT_OPTS: '{"env":"devlopment","logLevel":"debug"}'
      env:
        TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
        TWILIO_AUTH_TOKEN: ${{ secrets.TWILIO_AUTH_TOKEN 
        TWILIO_CLIENT_OPTS: '{"env":"devlopment","logLevel":"debug"}'
 ```
 ### Twilio create opts `TWILIO_OPTS`. Can be passed as input OR env var - https://github.com/twilio/twilio-node/blob/main/lib/rest/api/v2010/account/message.d.ts#L193
   ```yml
      uses: adamclark64/twilio-actions-sms-mms@v1
      with:
        body: text portion of notification
        mediaUrl: https://m.media-amazon.com/images/M/MV5BMjA3MjQ4NTMyNF5BMl5BanBnXkFtZTcwMTM3NDk0NA@@._V1_.jpg
        from: +8008675309
        to: +8008675309
        TWILIO_OPTS:  '{"sendAt":"2022-10-31T23:59:00.000Z"}'
      env:
        TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
        TWILIO_AUTH_TOKEN: ${{ secrets.TWILIO_AUTH_TOKEN 
        TWILIO_OPTS: '{"sendAt":"2022-10-31T23:59:00.000Z"}'
 ```