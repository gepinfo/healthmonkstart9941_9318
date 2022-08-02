import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class execrisedetailsController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/execrisedetails/get/search', this.GpSearch);
this.router.delete('/execrisedetails/:id', this.GpDelete);
this.router.put('/execrisedetails/get/update', this.GpSearchForUpdate);
this.router.get('/execrisedetails/get/search', this.GpSearch);
this.router.put('/execrisedetails', this.GpUpdate);
this.router.put('/execrisedetails/get/update', this.GpSearchForUpdate);
this.router.get('/execrisedetails/:id', this.GpGetNounById);
this.router.put('/execrisedetails', this.GpUpdate);
this.router.get('/execrisedetails', this.GpGetAllValues);
this.router.get('/execrisedetails/:id', this.GpGetNounById);
this.router.post('/execrisedetails', this.GpCreate);
    }

public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpSearch');
        new ApiAdapter().get(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpDelete');
        new ApiAdapter().delete(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.WORKOUTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpSearch');
        new ApiAdapter().get(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpUpdate');
        new ApiAdapter().put(Constant.WORKOUTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.WORKOUTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpGetNounById');
        new ApiAdapter().get(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpUpdate');
        new ApiAdapter().put(Constant.WORKOUTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpGetNounById');
        new ApiAdapter().get(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpCreate');
        new ApiAdapter().post(Constant.WORKOUTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }








}

lsController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into execrisedetailsController.ts: GpCreate');
        new ApiAdapter().post(Constant.WORKOUTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from execrisedetailsController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }








}

