import * as mongoose from 'mongoose';
import medicationdetailsModel from '../models/medicationdetails';
import { CustomLogger } from '../config/Logger'


export class medicationdetailsDao {
    private medicationdetails = medicationdetailsModel;
    constructor() { }
    
    public async GpDelete(medicationdetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsDao.ts: GpDelete');

    

    
    
    
    this.medicationdetails.findByIdAndRemove(medicationdetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationdetailsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(medicationdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(medicationdetailsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.medicationdetails.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationdetailsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(medicationdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.medicationdetails.findOneAndUpdate({ _id: medicationdetailsData._id }, medicationdetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationdetailsDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(medicationdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsDao.ts: GpUpdate');

    

    
    
    
    this.medicationdetails.findOneAndUpdate({ _id: medicationdetailsData._id }, medicationdetailsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationdetailsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(medicationdetailsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsDao.ts: GpGetNounById');

    

    
    
    
    this.medicationdetails.findById(medicationdetailsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationdetailsDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsDao.ts: GpGetAllValues');

    

    
    
    
    this.medicationdetails.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationdetailsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(medicationdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsDao.ts: GpCreate');

    let temp = new medicationdetailsModel(medicationdetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from medicationdetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}