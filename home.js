function makeFeature(before, after, transform, header, txt){
    let feature = document.createElement("div")

    feature.className = "feature"

    feature.innerHTML = 
        `
            <div class="img">
                <div class="txt">Before</div>
                <div class="img"><img src="${before}" alt="image not added yet" style="transform:${transform};"></div>
            </div>
            <div class="img">
                <div class="txt">After</div>
                <div class="img"><img src="${after}" alt="image not added yet" style="transform:${transform};"></div>
            </div>
            <div>
                <h3>${header}</h3>
                <p>${txt}</p>
            </div>
        `

    document.getElementById("features").appendChild(feature)
}

makeFeature(
    "assets/acps_before.png",
    "assets/acps_after.png",
    "translate(-45%, -40%) scale(.3, .3)",
    "Allays Can Plant Seeds",
    "Makes allays more worth getting by having them be useful for automated farms"
)

makeFeature(
    "",
    "",
    "",
    "Animals have custom feeding",
    "Makes animals like pigs more useful by having them eat more than just a few uncommon food items."
)
makeFeature(
    "",
    "",
    "",
    "Animals heal when fed",
    "Useful for parrots or saddled pigs whenever they get hurt."
)
makeFeature(
    "",
    "",
    "",
    "Bane of arthropods affects more mobs",
    "Makes bane of arthropods more useful by making them affect more mobs, like guardians."
)
makeFeature(
    "assets/bhcbr_before.png",
    "assets/bhcbr_after.png",
    "translate(-45%, -40%) scale(.22, .22)",
    "Blocks have custom blast resistance",
    `
    You can customize how resisant blocks are to explosions<br>
    For example, you can makes blocks like dirt and sand more resistance to explosion, making it easier to clean up creeper explosions
    `
)
makeFeature(
    "",
    "",
    "",
    "Blocks have custom hardness",
    `
    You can customize how easy or hard it is to break a specidifed block.<br>
    For example, you can makes softer blocks like dirt harder to break, incentivizing using efficiency enchantments on them.
    `
)
makeFeature(
    "assets/casasfg_before.png",
    "assets/casasfg_after.png",
    "translate(-50%, -40%) scale(.3, .3)",
    "Cactus and sugarcane always spawn fully grown",
    "Cactus and sugarcanes will now always generate fully grown and between 3-4 blocks tall, instead of only growing fully tall when you spent time in the chunk."
)
makeFeature(
    "",
    "",
    "",
    "Cats repel creepers further away",
    "Lets cats be a little more useful by repelling creepers at a much safer distance."
)
makeFeature(
    "",
    "",
    "",
    "Enchantments can be blacklisted",
    `
    You can customize which enchantments will be prevented from appearing in enchanting tables or loots.
    Useful for when you want to remove an OP enchantment that makes similar lesser enchantments less worth getting, like Protection.
    `
)
makeFeature(
    "assets/ecttb_before.png",
    "assets/ecttb_after.png",
    "translate(-45%, -40%) scale(.2, .2)",
    "Enchantments can transfer to books",
    `
    You can now extract enchantments from items using a book.<br> 
    Don't worry, you wont lose your items. <br> 
    <br> 
    You can also set how much enchantments can transfer.<br>  
    Set this option to 100% if you want to incentivize enchanting early game tier tools.<br> 
    Set this option to less than 100% if you want to prevent using this to cheat around repair cost by transfering enchantments to a fresh tool.
    `
)
makeFeature(
    "",
    "",
    "",
    "Enderman can teleport unreachable players",
    `
    Prevents you from escaping an enderman's wrath by using a two block ceiling.<br> 
    Endermans can only teleport you within a few blocks away
    `
)
makeFeature(
    "assets/fpoli_before.png",
    "assets/fpoli_after.png",
    "translate(-45%, -40%) scale(.16, .16)",
    "Fire protection offers lava immunity",
    `
    Makes fire protection more worth getting by offering temporary lava protection.<br> 
    The config value represents the number of second of lava immunity offered per levels.
    `
)
makeFeature(
    "",
    "",
    "",
    "Fire protection offers melee protection",
    "Makes fire protection more worth getting by offering melee protections against fiery mobs like blazes."
)
makeFeature(
    "assets/fman_before.png",
    "assets/fman_after.png",
    "translate(-45%, -40%) scale(.2, .2)",
    "Frost walker melts at night",
    "Prevents frosted ice from annoyingly not melting at night."
)
makeFeature(
    "assets/gnlsiwf_before.png",
    "assets/gnlsiwf_after.png",
    "translate(-44%, -40%) scale(.2, .2)",
    "Glow squids no longer spawns in waterfalls",
    "Prevents glow squids from spawning in 1x1 waterfalls just to later suffocate."
)
makeFeature(
    "",
    "",
    "",
    "Glowstone dust can glow up signs",
    "Let you use glowstone dust to make sign text glow just like with glow ink sac."
)
makeFeature(
    "",
    "",
    "",
    "Horses need food to be tamed",
    "Prevents you from taming any horse with zero effort"
)
makeFeature(
    "assets/pahafi_before.png",
    "assets/pahafi_after.png",
    "translate(-43%, -40%) scale(.3, .3)",
    "Piglins and hoglins are fire immune",
    "Makes piglins and hoglins immune to fire/lava like the rest of native nether mobs."
)
makeFeature(
    "",
    "",
    "",
    "Pigs ridden are faster",
    "Makes saddled pigs more worth getting over horses by boosting their ridden speed."
)
makeFeature(
    "",
    "",
    "",
    "Shields no longer prevent knockback",
    "Shields are less overpowered by no longer canceling knockback from mob melee attacks."
)
makeFeature(
    "assets/sngoi_before.png",
    "assets/sngoi_after.png",
    "translate(-42%, -40%) scale(.4, .4)",
    "Sugarcane no longer generates on ice",
    "Prevents sugarcane from spawning next to ice only to later break."
)
makeFeature(
    "assets/thcrr_before.png",
    "assets/thcrr_after.png",
    "translate(-45%, -40%) scale(.2, .2)",
    "Tools have custom repair rate",
    "The amount of ingots needed to fully repair an item can be customized instead of it always being 4 ingots."
)
makeFeature(
    "",
    "",
    "",
    "Thorns no longer wear down armor",
    "Makes thorns more worth getting by canceling extra armor damage whenever thorns activate."
)
makeFeature(
    "",
    "",
    "",
    "Villages have less fights",
    "Non-zombies/non-pillagers and villager golems no longer fight each other. Mobs and player-made golems will still fight each other as normal."
)


makeFeature(
    "",
    "",
    "",
    "Bridging is disabled",
    "Makes the game more challenging by preventing you from bridging across any large gap."
)
makeFeature(
    "",
    "",
    "",
    "Tools have limited enchantment capacitie",
    `
    There are limits to how many enchantments you can fit into an item.<br>
    This prevents you from aiming for OP tools and instead forces you to strategize on what to choose.<br>
    <br>
    How it works:<br>
    Each item has X maximum amount of enchantment weights it can hold.<br>
    Each enchantment has a weight of Y depending on how close it is to its max level.<br>
    <br>
    Example:<br>
    Iron Swords can hold up to a maximum of 2.5 enchantments.<br>
    Fire aspect 1 one takes up 0.5 enchantments, as its half way from its maximum levels of two.<br>
    In addition, curse enchantments have negative weights, allowing you to effectively increase the capacity of an item.
`
)
makeFeature(
    "",
    "",
    "",
    "Pillaring is disabled",
    "Makes the game more challenging by preventing you from pillaring or placing blocks below you in midair."
)
makeFeature(
    "assets/xid_before.png",
    "assets/xid_after.png",
    "translate(-45%, -40%) scale(.2, .2)",
    "Xp is disabled",
    "If you feel like xp is too grindy and you'd rather just disable it completely, now you can."
)
makeFeature(
    "",
    "",
    "",
    "Xp not needed for anvils",
    "Allows you to repair or enchant an item using an anvil without any xp requirements."
)
makeFeature(
    "",
    "",
    "",
    "Tools max durability decay",
    "As an alternative to increasing repair costs, an item will instead lose maximum durability as you repair it. An item will also decay faster with more enchantments. For example, if this config value is set to 1000, an item with 0 enchantments will lose 0 max durability after 1000 durability has been repaired; an item with 1 full enchantment will lose 1 max durability after 1000 durability has been repaired; an item with two full enchantments will lose 2 max durability; etc."
)

