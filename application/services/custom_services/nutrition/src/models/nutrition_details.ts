
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const nutrition_detailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   nutrition_deatials: String
})

const nutrition_detailsModel = mongoose.model('nutrition_details', nutrition_detailsSchema, 'nutrition_details');
export default nutrition_detailsModel;
