# Automated Messages

## Using the Script
To use the script, you put the code into the JavaScript console (F12 and ctrl + shift + j are common ways to get there. Make sure you are in the "console" tab) and pressing `enter`.

Then, use the code in the format needed for your automated message.

The code must be run from a profile or a studio due to required headers and cookies as well as the requirement for jQuery.

### Basic Format:
```js
automatedMessage("Your message here", [ {uname:'username', nickname: 'Nickname'}, {uname:'username2',nickname:'Nickname 2'}]);
```
This code will send the automated message "Your message here" to the users `username` and `username2` whose nicknames are Nickname and Nickname 2 respectively. (on Scratch it is common to have a nickname for people to call you by)

### Random Number To Avoid Spam
Scratch has a built-in spam detector, so it can be useful to add a random number to prevent the spam detection. You can use this code to automate this process:
```js
automatedMessage("Your message here", [ {uname:'username', nickname: 'Nickname'}, {uname:'username2',nickname:'Nickname 2'}], true);
```
The `true` is what enables the random numbers.

### Using Nicknames and Usernames
To use a nickname or username in automated messages, you can just put `USER` and `NICKNAME` in your message text.
