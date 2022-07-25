import { Request, Response } from 'express';
import {medicationdetailsDao} from '../dao/medicationdetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let medicationdetails = new medicationdetailsDao();

export class medicationdetailsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsService.ts: GpDelete')
     let  medicationdetailsId = req.params.id;
     medicationdetails.GpDelete(medicationdetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationdetailsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsService.ts: GpSearch')
     let  medicationdetailsData = req.query;
     medicationdetails.GpSearch(medicationdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationdetailsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsService.ts: GpSearchForUpdate')
     let  medicationdetailsData = req.body;
     medicationdetails.GpSearchForUpdate(medicationdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationdetailsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsService.ts: GpUpdate')
     let  medicationdetailsData = req.body;
     medicationdetails.GpUpdate(medicationdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationdetailsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsService.ts: GpGetNounById')
     let  medicationdetailsId = req.params.id;
     medicationdetails.GpGetNounById(medicationdetailsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationdetailsService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsService.ts: GpGetAllValues')
     
     medicationdetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationdetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into medicationdetailsService.ts: GpCreate')
     let  medicationdetailsData = req.body;
     medicationdetails.GpCreate(medicationdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from medicationdetailsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}