import { BaseItemData } from './base-item.mjs'

export class WeaponData extends BaseItemData {

	//This is a place to define templates, I'll make a few inherited methods which act as templates.
	static defineSchema() {
		const fields = foundry.data.fields;
		return {
			//Use details for weapon effect, its easy.
			...super.hasDetails(),
			...super.hasWeight(),
			equipped_left: new fields.BooleanField({
				required: true,
				initial: false
			}),
			equipped_right: new fields.BooleanField({
				required: true,
				initial: false
			}),
			twohanded: new fields.BooleanField({
				required: true,
				initial: false
			}),
			thrown: new fields.BooleanField({
				required: true,
				initial: false
			}),
			damage: new fields.StringField({
				required: false,
				initial: '4',
				options: ['4', '6', '8', '10','12'],
				blank: true
			}),
			keywords: new fields.StringField({
				required: false,
				initial: '',
				blank: true
			}),

			range: new fields.SchemaField({
				melee: new fields.NumberField({
					require: true,
					initial: 1,
					min: 0,
					max:3
				}),
				missile: new fields.NumberField({
					require: true,
					initial: 0,
					min: 0,
				}),
				spell: new fields.NumberField({
					require: true,
					initial: 0,
					min: 0,
				}),
				unarmed: new fields.NumberField({
					require: true,
					initial: 0,
					min: 0,
					max:1
				})
			})
		};
	}
}
