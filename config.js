const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923429837570" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923429837570";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923429837570,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_32_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5LFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUDBGRThoZ0RpK1FXZnhjWktCR3BLNVVZdXhpcm1LdWRTR0xQRFlxcGcwcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekk2blotNXhTS1dsakhMQUt4SlNEQVwiLFxuICBcInBob25lSWRcIjogXCJjZDE2OTk1My02OWUzLTRmOGUtODRhOS0xYWM0ZjQ0Y2FlOGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDM2LFxuICAgICAgMTgzLFxuICAgICAgNTAsXG4gICAgICAxNzMsXG4gICAgICAxNixcbiAgICAgIDEwOCxcbiAgICAgIDIzNSxcbiAgICAgIDE0NCxcbiAgICAgIDUyLFxuICAgICAgNjgsXG4gICAgICAyMjcsXG4gICAgICAyMTMsXG4gICAgICAxNTcsXG4gICAgICAyMjksXG4gICAgICAxMTAsXG4gICAgICAzNSxcbiAgICAgIDIwMSxcbiAgICAgIDI1NCxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDY0LFxuICAgICAgMTc0LFxuICAgICAgMTQ0LFxuICAgICAgMTQ4LFxuICAgICAgMjEzLFxuICAgICAgMjE3LFxuICAgICAgMjM2LFxuICAgICAgMTQxLFxuICAgICAgNjIsXG4gICAgICAyNTMsXG4gICAgICAxMzgsXG4gICAgICAyOCxcbiAgICAgIDE1MyxcbiAgICAgIDc0LFxuICAgICAgMTg1LFxuICAgICAgNjAsXG4gICAgICAyMDksXG4gICAgICAxNjQsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJFS0haTUQ3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNTU2NzM0OTg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIikpIC0g8J2XoMysyb0g8J2XmcqMzaHNnMmzxpnJsMm9ICAvLy1cIixcbiAgICBcImxpZFwiOiBcIjE4MTIwMDM3NTI3MTU2Nzo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovS3k3OENFT2EreWJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnRhVkRlVWtiQzV3cXdZdk1UT004VXdqdE1MMGQ5QUN0V1JZL3psUCtCQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJabjJtU2VtVXp6WUFrbkJJTXZGaFJLQm9tWTZTYWFPd3JlajNvd0M4SzhyaXNpRjRQN045VWtzT25qR3hkRndZazZiSGl0Zkhpc3lYMGg0QnJjZTJDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPU2NhZTFMSDNvajU0L0ZFZW9pQTc0cXlTYmZGNm0ra0ZXQThrajRmMFZPeXV3S3J1WEp6UzVsN2dyMlhXMmVCSC9lU0RZREUyTDViYVFnbmVqclBqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNTU2NzM0OTg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODc3MTU2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp6ZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnplLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWnRXSjg2djdOQUh2ckdrNVJUb1JQckd1NCtYSEIxYzVzdnlTQ1FHY2ZjZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzAyMjk3OTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODc3MTU2NTg3NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ cyber²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "cyber-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Cybertechabhi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "CYBER"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
