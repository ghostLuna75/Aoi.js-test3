module.exports = ({
  name: "$alwaysExecute",
  code: `
  $if[$stringStartsWith[$message[1];$getServerVar[Prefix]]==true]
  $useChannel[902184673273323551]
  $title[New Command Used]
  $thumbnail[$authorAvatar]
  $addField[Member Count;$membersCount[$guildID];yes]
  $addField[Guild ID;\`$guildID\`;yes]
  $addField[Guild;$serverName;yes]
  $addField[Total Used;$sum[$getGlobalUserVar[commandCount];1];yes]
  $addField[Command;$message;yes]
  $addField[Author;$userTag;yes]
  $color[BLUE]
  $endif
  $setGlobalUserVar[commandCount;$math[$getGlobalUserVar[commandCount]+1]]
  $setVar[commandCount;$math[$getVar[commandCount]+1]]
  $suppressErrors
  `
})