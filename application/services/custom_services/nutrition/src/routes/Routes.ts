import { Request, Response, NextFunction } from "express";
import { nutrition_detailsController } from '../controller/nutrition_detailsController';


export class Routes {
    private nutrition_details: nutrition_detailsController = new nutrition_detailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/nutrition_details/:id').delete(this.nutrition_details.GpDelete);
app.route('/nutrition_details/get/search').get(this.nutrition_details.GpSearch);
app.route('/nutrition_details/get/update').put(this.nutrition_details.GpSearchForUpdate);
app.route('/nutrition_details').put(this.nutrition_details.GpUpdate);
app.route('/nutrition_details/:id').get(this.nutrition_details.GpGetNounById);
app.route('/nutrition_details').get(this.nutrition_details.GpGetAllValues);
app.route('/nutrition_details').post(this.nutrition_details.GpCreate);
     }

}