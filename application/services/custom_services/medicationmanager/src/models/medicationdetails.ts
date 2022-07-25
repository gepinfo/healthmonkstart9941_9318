
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const medicationdetailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   medicationdata: String
})

const medicationdetailsModel = mongoose.model('medicationdetails', medicationdetailsSchema, 'medicationdetails');
export default medicationdetailsModel;
