import { TRESPASSER } from './helpers/config.mjs';
import { TrespasserActor } from './actor/actor.mjs';
import { TrespasserActorSheet } from './sheets/actor-sheet.mjs';
import { TrespasserItem } from './item/item.mjs';
import { TrespasserItemSheet } from './sheets/item-sheet.mjs';
import { SpellData } from './data_models/items/spell.mjs';
import { ArmorData } from './data_models/items/armor.mjs';
import { ActionData } from './data_models/items/action.mjs';
import { WeaponData } from './data_models/items/weapon.mjs';
import { FeatureData } from './data_models/items/feature.mjs';
import { TalentData } from './data_models/items/talent.mjs';
import { InventoryItemData } from './data_models/items/inventory-item.mjs';
import { AdventurerData } from './data_models/adventurer.mjs';
import { loadHandlebarsPartials } from './helpers/preload.mjs'
import { TrespasserRoll } from './roll/trespasser-roll.mjs';

Hooks.once('init', function () {

	game.trespasser = {
		TrespasserActor,
		TrespasserItem,
	};

	CONFIG.TRESPASSER = TRESPASSER;

	CONFIG.Actor.dataModels.adventurer = AdventurerData;
	CONFIG.Actor.documentClass = TrespasserActor;

	CONFIG.Item.dataModels.spell = SpellData;
	CONFIG.Item.dataModels.armor = ArmorData;
	CONFIG.Item.dataModels.feature = FeatureData;
	CONFIG.Item.dataModels.talent = TalentData;
	CONFIG.Item.dataModels.inventory_item = InventoryItemData;
	CONFIG.Item.dataModels.action = ActionData;
	CONFIG.Item.dataModels.weapon = WeaponData;

	CONFIG.Dice.rolls.push(TrespasserRoll);

	Actors.unregisterSheet('core', ActorSheet);
	Actors.registerSheet('trespasser', TrespasserActorSheet, {
		makeDefault: true,
		label: 'TRESPASSER.SheetLabels.Actor',
	});

	Items.unregisterSheet('core', ItemSheet);
	Items.registerSheet('trespasser', TrespasserItemSheet, {
		makeDefault: true,
		label: 'TRESPASSER.SheetLabels.Item',
	});

	loadHandlebarsPartials();

});
