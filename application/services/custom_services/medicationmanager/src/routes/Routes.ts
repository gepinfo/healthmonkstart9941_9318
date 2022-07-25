import { Request, Response, NextFunction } from "express";
import { medicationdetailsController } from '../controller/medicationdetailsController';


export class Routes {
    private medicationdetails: medicationdetailsController = new medicationdetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/medicationdetails/:id').delete(this.medicationdetails.GpDelete);
app.route('/medicationdetails/get/search').get(this.medicationdetails.GpSearch);
app.route('/medicationdetails/get/update').put(this.medicationdetails.GpSearchForUpdate);
app.route('/medicationdetails').put(this.medicationdetails.GpUpdate);
app.route('/medicationdetails/:id').get(this.medicationdetails.GpGetNounById);
app.route('/medicationdetails').get(this.medicationdetails.GpGetAllValues);
app.route('/medicationdetails').post(this.medicationdetails.GpCreate);
     }

}