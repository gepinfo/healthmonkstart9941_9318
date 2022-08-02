
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const execrisedetailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   execrise_details: String
})

const execrisedetailsModel = mongoose.model('execrisedetails', execrisedetailsSchema, 'execrisedetails');
export default execrisedetailsModel;