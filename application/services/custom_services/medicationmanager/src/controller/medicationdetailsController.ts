import { Request, Response } from 'express';
import { medicationdetailsService } from '../service/medicationdetailsService';
import { CustomLogger } from '../config/Logger'
let medicationdetails = new medicationdetailsService();

export class medicationdetailsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
medicationdetails.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationdetailsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationdetailsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
medicationdetails.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationdetailsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationdetailsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
medicationdetails.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationdetailsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationdetailsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
medicationdetails.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationdetailsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationdetailsController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
medicationdetails.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationdetailsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationdetailsController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
medicationdetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationdetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationdetailsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
medicationdetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into medicationdetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from medicationdetailsController.ts: GpCreate');
    })}


}