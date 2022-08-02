
import { CustomLogger } from '../config/Logger'


export class nutrition_detailsDao {
    
    constructor() { }
    getCredentialsData(connectorName) {
        return new Promise(resolve => {
            new ApiAdapter().get('http://localhost:8000/desktop/scmbyname?connector_name=' + connectorName).then(
                data => {
                    resolve(data);
                }
            )
        })
    }
    public async (){
    
    new CustomLogger().showLogger('info', 'Enter into nutrition_detailsDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into nutrition_detailsDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into nutrition_detailsDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into nutrition_detailsDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into nutrition_detailsDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into nutrition_detailsDao.ts: ');

    

    
    
    
    }
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into nutrition_detailsDao.ts: ');

    

    
    
    
    }


}