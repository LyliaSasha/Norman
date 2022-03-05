/*
   *
     If you find an error in writing a word / sentence please contact me
   *
*/
exports.limit = (prefix) =>{
	return` ⚠️ Your limit has run out, please send ${prefix}limit to check your limit`
}
exports.limitg= (prefix) =>{
	return` ⚠️ Your geme limit has run out, please send ${prefix}limit to check your limit`
}
exports.event = (prefix) =>{
	return` ⚠️ Group event has not been activated, please type ${prefix}event on to activate`
}
exports.wait = () => {
	return `⏳ Waiting is in progress, please be patient...`
	}
exports.success = () => {
	return `✅ Success Sis ...`
	}
exports.successBc = () => {
	return `✅ Broadcast Success`
	}
exports.wrongFormat = () => {
	return `❎ The format is wrong, try checking again in the menu`
	}
exports.erorStik = () => {
	return `❎ That's not a sticker`
	}
exports.tagStik = () => {
	return `❎ Reply/tag the sticker`
	}
exports.erorLink = () => {
	return `❎ Invalid link`
	}
exports.onlygc = () => {
	return `❎ This feature is group-specific`
	}
exports.onlyOwner = () => {
	return `❎ This is specifically for owner norman botz`
	}
exports.benned = () => {
	return `❎ Sorry, your number has been blocked`
	}
exports.onlygcAdmin = () => {
	return `❎ Group admin only`
	}
exports.cariCecan = () => {
	return `⏳ Looking for a girl or cecan`
	}
exports.cariCogan = () => {
	return `⏳ Looking for a boy or cogan`
	}
exports.pesanBot = () => {
	return `❎ Reply to the bot message`
	}
exports.replyFoto = () => {
	return `❎ Reply photo`
	}
exports.tagUser = () => {
	return `❎ Tags @user`
	}
exports.noReply = () => {
	return `❎ The message you replied to did not contain a reply`
	}
exports.changeNmGc = () => {
	return `✅ Successful Change of Group Name`
	}
exports.changeDeskGc = () => {
	return `✅ Successfully Changed Group Desk`
	}
exports.spam = (prefix, command) => {
	return `❎ Example ${prefix + command} text|amount`
	}
exports.tahta = (prefix, command) => {
	return `❎ Example ${prefix + command} Norman|botz`
	}
exports.noteks = (prefix, command) => {
	return `❎ Example ${prefix + command} Norman`
	}
exports.botNotAdm = () => {
	return `Make bot as admin to use this command`
	}
exports.tryAgain = () => {
	return `❎  Failed, try again ^_^`
	}
exports.anlinOn = () => {
	return `✅ Antilink Activated`
	}
exports.anlinOff = () => {
	return `✅ Antilink Disabled`
	}
exports.notregis = (prefix, sender) => {
	return `Hello @${sender.split("@")[0]} you haven't registered in the norman bot, please type ${prefix}verify\n\nKamu juga bisa daftar dengan cara mengirimkan kode verifikasi dari web api\nhttps://api-alphabot.herokuapp.com/api/verification`
	}
exports.udahregis = (pushname) => {
	return `Hello ${pushname} You have registered on the bot norman`
	}
exports.enNum = () => {
 return `❎ Enter Numbers Correctly`
 }
exports.adminGc = () => {
 return `Because you are the admin so the bot will not log you out`
 }
 exports.izinDt = () => {
 return `Permission accepted`
 }
 exports.anjawaOn = (command) => {
	return `✅ ${command} Activated`
	}
exports.anjawaOff = (command) => {
	return `✅ ${command} Disabled`
	}
exports.anjawaUdhOn = (command) => {
	return `✅ ${command} been active before`
	}
exports.anjawaUdhOon = (command) => {
	return `Select on to activate, off to disable`
	}
exports.onORoff = (command) => {
	return `Select on to activate, off to disable`
	}
exports.gcOpen = (command) => {
	return `✅ ${command} Successfully opened group`
	}
exports.gcClose = (command) => {
	return `✅ ${command} Successfully Close group `
	}
exports.nsfwmo= () => {
	return `The nsfw feature has not been activated, contact the bot owner to activate it`
	}
exports.erorCode = () => {
 return `the code you entered is wrong, please check again\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Contact the owner to use this feature`
 }
 //vote
exports.noSesiVote = () => {
 	return`No voting session`
 }
exports.suksesDelVot = () => {
	return`Successfully Deleting Voting Session In This Group`
	}
exports.adaVoting = () => {
	return`Voting Session In Progress In This Group`
	}
exports.caraVoting = (prefix, command) => {
    return`*Voting*\n\n${prefix + command} @tag target | reason  | 1 (1 = 1 Minute)`
    }
exports.caraVot = () => {
 	return`Enter number in line 3\nContoh: 1-9999\n1 = 1 Minute`
    }
//ttt
exports.noSesiTtt = () =>{
	return`There is no tictactoe session in this group`
	}
exports.suksesDelTtt = () =>{
	return`Successfully deleted tictactoe session in this group`
	}
//on & off
exports.ownerOff = () =>{
	return`Owner norman bot has been off`
	}
exports.ownerOn = () =>{
	return`owner norman bot is on`
	}