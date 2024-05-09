export class StrongholdData extends foundry.abstract.TypeDataModel {
	static defineSchema() {

		const fields = foundry.data.fields;
		return {
			/*
			 *
			 * ---------------------------
			 * Inputs
			 * ------
			 *x Population
			 * Investment (each player!)
			 *
			 * Derived Fields
			 * --------------
			 *x Stronghold Level
			 *x Concurrent Project Limit
			 *x Potency Die
			 *x Skill Bonus
			 * ---------------------------
			 *X Attributes
			 * ----------
			 *x Military
			 *x Efficiency
			 *x Resources
			 *x Expertise
			 *x Allegiance
			 *x Appeal
			 *
			 * -- Modifiers and Skill bonus are calculated same way as normal characters.
			 *
			 *X Skills
			 * ------
			 *x Agriculture
			 *x Constructioalliesn
			 *x Commerce
			 *x Cuisine
			 *x Entertainment
			 *x Espionage
			 *x Faith
			 *x Hospitality
			 *x Research
			 *x Seafaring
			 *x Statecraft
			 *x Tactics, Field
			 *x Tactics, Naval
			 *x Tactics, Siege
			 * --------------------------
			 *
			 * Other Fields
			 * ------------
			 *x Allies
			 *x Leadership
			 *x Enemies
			 *x Location
			 *x Population Rank - Track vibes again.
			 * 
			 * --------------------------
			 *
			 * Potential Objects
			 * -----------------
			 * Features - Implemented
			 * Arrivals - Simple item i think.
			 * Investments - This would be new.
			 * Projects - Wildsea track vibes.
			 *
			 *---------------------------
			 *
			 * Methods
			 * -------
			 *x Ability Modifiers
			 *x Skill bonus addition
			 *
			 * I think it would be cool to have like, a thing which returns how much investment is needed.
			 * Or show players as red who havent contributed enough to the next level.
			 * Also show whether population is enough.
			 *   Next level investment goal field
			 *   Population rank goal for next level
			 *
			 * Features could contribute to a skill being "trained", but that would be a lot of work. I think we just allow people to check it themselves.
			 * I'll talk to liv about it.
			 *
			 */

			text_details: new fields.SchemaField({
				allies: new fields.TextField({
					required: true,
					initial: '',
					empty: true
				}),
				leadership: new fields.TextField({
					required: true,
					initial: '',
					empty: true
				}),
				enemies: new fields.TextField({
					required: true,
					initial: '',
					empty: true
				}),
				location: new fields.TextField({
					required: true,
					initial: '',
					empty: true
				})
			}),

			attributes: new fields.SchemaField({
				mil: new fields.NumberField({
					required: true,
					initial: 10,
					integer: true,
					min: 3,
					max: 18
				}),
				eff: new fields.NumberField({
					required: true,
					initial: 10,
					integer: true,
					min: 3,
					max: 18
				}),
				rsc: new fields.NumberField({
					required: true,
					initial: 10,
					integer: true,
					min: 3,
					max: 18
				}),
				exp: new fields.NumberField({
					required: true,
					initial: 10,
					integer: true,
					min: 3,
					max: 18
				}),
				all: new fields.NumberField({
					required: true,
					initial: 10,
					integer: true,
					min: 3,
					max: 18
				}),
				app: new fields.NumberField({
					required: true,
					initial: 10,
					integer: true,
					min: 3,
					max: 18
				}),
			}),

			skills: new fields.SchemaField({
				agriculture: new fields.BooleanField({
					required: true,
					initial: false
				}),
				construction: new fields.BooleanField({
					required: true,
					initial: false
				}),
				commerce: new fields.BooleanField({
					required: true,
					initial: false
				}),
				cuisine: new fields.BooleanField({
					required: true,
					initial: false
				}),
				entertainment: new fields.BooleanField({
					required: true,
					initial: false
				}),
				espionage: new fields.BooleanField({
					required: true,
					initial: false
				}),
				faith: new fields.BooleanField({
					required: true,
					initial: false
				}),
				hospitality: new fields.BooleanField({
					required: true,
					initial: false
				}),
				research: new fields.BooleanField({
					required: true,
					initial: false
				}),
				seafaring: new fields.BooleanField({
					required: true,
					initial: false
				}),
				statecraft: new fields.BooleanField({
					required: true,
					initial: false
				}),
				tactics-field: new fields.BooleanField({
					required: true,
					initial: false
				}),
				tactics-naval: new fields.BooleanField({
					required: true,
					initial: false
				}),
				tactics-siege: new fields.BooleanField({
					required: true,
					initial: false
				}),
			}),

			population_rank: new fields.NumberField({
				required: true,
				initial: 1,
				min: 1,
				max: 30
			}),

			//Because investments are items, level ups will be a button which is clickable based
			//On whether the criteria are met, it will then increment this field.
			//Initially i was going to track it here, but a button makes it more ceremonial, so cool.
			level: new fields.NumberField({
				required: true,
				initial: 0,
				min: 0,
				max: 9
			})
		};
	}

	_getPopulationFromRank() {
		const population = [
			20,
			30,
			40,
			55,
			70,
			80,
			100,
			120,
			150,
			180,
			220,
			270,
			330,
			400,
			500,
			600,
			750,
			900,
			1100,
			1350,
			1650,
			2000,
			2500,
			3000,
			3300,
			3600,
			4000,
			4500,
			5000,
			5500
		];

		return population[this.population_rank - 1];
	}

	_getFieldsDerivedByLevel() {
		const levelTable = {
			0: {skill_bonus: 0, potency: 6, proj_limit: 1},
			1: {skill_bonus: 2, potency: 6, proj_limit: 1},
			2: {skill_bonus: 2, potency: 6, proj_limit: 2},
			3: {skill_bonus: 2, potency: 8, proj_limit: 2},
			4: {skill_bonus: 3, potency: 8, proj_limit: 3},
			5: {skill_bonus: 3, potency: 8, proj_limit: 3},
			6: {skill_bonus: 3, potency: 10, proj_limit: 4},
			7: {skill_bonus: 4, potency: 10, proj_limit: 4},
			8: {skill_bonus: 4, potency: 10, proj_limit: 5},
			9: {skill_bonus: 4, potency: 12, proj_limit: 5}
		};

		//Should return the table relevant here.
		return levelTable[this.level.toString()];
	}

	get population() {
		return this._getPopulationFromRank();
	}

	get skill_bonus() {
	 return this._getFieldsDerivedByLevel().skill_bonus;
	}

	get potency_die() {
	 return this._getFieldsDerivedByLevel().potency;
	}
	
	get concurrent_project_limit() {
	 return this._getFieldsDerivedByLevel().proj_limit;
	}

	get ability_mods() {
		return {
			mil: Math.floor((this.attributes.mil - 10) / 2),
			eff: Math.floor((this.attributes.eff - 10) / 2),
			rsc: Math.floor((this.attributes.rsc - 10) / 2),
			exp: Math.floor((this.attributes.exp - 10) / 2),
			all: Math.floor((this.attributes.all - 10) / 2),
			app: Math.floor((this.attributes.app - 10) / 2)
		};
	}

	//Skilled modifier is just the regular mod plus the skill bonus based on level.
	get skilled_mods() {
		const mods = {...this.ability_mods};
		const skillBonus = this.skill_bonus;

		return {
			mil: mods.mil + skillBonus,
			eff: mods.eff + skillBonus,
			rsc: mods.rsc + skillBonus,
			exp: mods.exp + skillBonus,
			all: mods.all + skillBonus,
			app: mods.app + skillBonus
		};
	}
}
