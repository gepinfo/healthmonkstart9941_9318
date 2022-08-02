import { Request, Response, NextFunction } from "express";
import { execrisedetailsController } from '../controller/execrisedetailsController';


export class Routes {
    private execrisedetails: execrisedetailsController = new execrisedetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/execrisedetails/:id').delete(this.execrisedetails.GpDelete);
app.route('/execrisedetails/get/search').get(this.execrisedetails.GpSearch);
app.route('/execrisedetails/get/update').put(this.execrisedetails.GpSearchForUpdate);
app.route('/execrisedetails').put(this.execrisedetails.GpUpdate);
app.route('/execrisedetails/:id').get(this.execrisedetails.GpGetNounById);
app.route('/execrisedetails').get(this.execrisedetails.GpGetAllValues);
app.route('/execrisedetails').post(this.execrisedetails.GpCreate);
     }

}