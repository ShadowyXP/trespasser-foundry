export class BaseItemData extends foundry.abstract.TypeDataModel {
	
	//This is a place to define templates, I'll make a few inherited methods which act as templates.

	static defineSchema() {

		const fields = foundry.data.fields;
		return {
			
		};
	}

	//If an object is going to have details, ill just have something for that.
	_hasDetails() {
		const fields = foundry.data.fields;
		return {

			details: new fields.StringField(
					required: true,
					initial: '',
					blank: true
			}),
		}
	}
}
