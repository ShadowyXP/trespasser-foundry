import { BaseItemData } from './base-item.mjs'

export class DeedData extends BaseItemData {

	//This is a place to define templates, I'll make a few inherited methods which act as templates.
	static defineSchema() {
		const fields = foundry.data.fields;
		return {
			...super.hasDetails(),

			tier: new fields.StringField({
				required: true,
				initial:'light',
				option: ['light', 'heavy', 'special', 'mighty'],
				empty: false
			}),
			type: new fields.StringField({
				required: true,
				initial:'innate',
				option: ['innate', 'spell', 'missile', 'item', 'melee', 'unarmed', 'versatile'],
				empty: false
			}),
			increaseCount: new fields.NumberField({
				require: true,
				initial: 0,
				min: 0,
				max: 3
			}),

			//attack or support
			isattack: new fields.BooleanField({
				required: true,
				initial: false
			}),

			//all the targeting specifics
			target: new fields.StringField({
				required: true,
				initial:'creature',
				option: ['creature', 'spread', 'special', 'blast', 'path', 'personal'],
				empty: false
			}),
			targetnum: new fields.NumberField({
				require: true,
				initial: 1,
				min: 0,
				max: 1000
			}),
			targetspec: new fields.StringField({
				required: true,
				initial:'',
				option: ['melee', 'close'],
				empty: true
			}),
			targetguard: new fields.BooleanField({
				required: true,
				initial: true
			}),

			//details
			base: new fields.SchemaField({
				damage: new fields.NumberField({
					require: true,
					initial: 0,
					min: 0
				}),
				text: new fields.StringField({
					required: true,
					initial:'',
					empty: false
				}),
				custom: new fields.StringField({
					required: true,
					initial:'',
					empty: false
				})
			}),
			hit: new fields.SchemaField({
				damage: new fields.NumberField({
					require: true,
					initial: 0,
					min: 0
				}),
				text: new fields.StringField({
					required: true,
					initial:'',
					empty: false
				}),
				custom: new fields.StringField({
					required: true,
					initial:'',
					empty: false
				})
			}),
			spark: new fields.SchemaField({
				damage: new fields.NumberField({
					require: true,
					initial: 0,
					min: 0
				}),
				text: new fields.StringField({
					required: true,
					initial:'',
					empty: false
				}),
				custom: new fields.StringField({
					required: true,
					initial:'',
					empty: false
				})
			}),
			start: new fields.StringField({
				required: true,
				initial:'',
				empty: false
			}),
			after: new fields.StringField({
				required: true,
				initial:'',
				empty: false
			}),
			//to override weapon/skill dice for monsters mostly
			custom: new fields.BooleanField({
				required: true,
				initial: false
			}),
			damagetype: new fields.BooleanField({
				required: true,
				initial: false
			})
		}
	}
	get base_cost() {
		switch (this.tier) {
			case 'light':
				return 0;
			case 'heavy':
				return 2;
			case 'mighty':
				return 4;
			case 'special':
				return 0;
		}
		return 0;

	}

	get current_cost() {
		return this.base_cost + this.increaseCount
	}
}
