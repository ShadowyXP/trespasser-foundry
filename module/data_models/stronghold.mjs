export class StrongholdData extends foundry.abstract.TypeDataModel {
	static defineSchema() {

		const fields = foundry.data.fields;
		return {
			/*
			 *
			 * ---------------------------
			 * Inputs
			 * ------
			 * Population
			 * Investment (each player!)
			 *
			 * Derived Fields
			 * --------------
			 * Stronghold Level
			 * Concurrent Project Limit
			 * Potency Die
			 * Skill Bonus
			 * ---------------------------
			 * Attributes
			 * ----------
			 * Military
			 * Efficiency
			 * Resources
			 * Expertise
			 * Allegiance
			 * Appeal
			 *
			 * -- Modifiers and Skill bonus are calculated same way as normal characters.
			 *
			 * Skills
			 * ------
			 * Agriculture
			 * Construction
			 * Commerce
			 * Cuisine
			 * Entertainment
			 * Espionage
			 * Faith
			 * Hospitality
			 * Research
			 * Seafaring
			 * Statecraft
			 * Tactics, Field
			 * Tactics, Naval
			 * Tactics, Siege
			 * --------------------------
			 *
			 * Other Fields
			 * ------------
			 * Allies
			 * Leadership
			 * Enemies
			 * Location
			 * Population Rank - Track vibes again.
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
			 * Ability Modifiers
			 * Skill bonus addition
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

		};
	}
}
