module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "foodmanager-9318",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart9941-9318-foodmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8035",
                    "protocol": "tcp",
                    "hostPort": "8035"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart9941.local:27017/healthmonkstart9941_9318?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart9941.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart9941.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart9941.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart9941.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart9941.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart9941.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart9941.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart9941.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart9941"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart9941",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "personmanager-9318",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart9941-9318-personmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8036",
                    "protocol": "tcp",
                    "hostPort": "8036"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart9941.local:27017/healthmonkstart9941_9318?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart9941.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart9941.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart9941.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart9941.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart9941.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart9941.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart9941.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart9941.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart9941"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart9941",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "nutrition-9318",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart9941-9318-nutrition:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8037",
                    "protocol": "tcp",
                    "hostPort": "8037"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart9941.local:27017/healthmonkstart9941_9318?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart9941.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart9941.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart9941.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart9941.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart9941.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart9941.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart9941.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart9941.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart9941"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart9941",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "medicationmanager-9318",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart9941-9318-medicationmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8038",
                    "protocol": "tcp",
                    "hostPort": "8038"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart9941.local:27017/healthmonkstart9941_9318?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart9941.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart9941.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart9941.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart9941.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart9941.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart9941.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart9941.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart9941.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart9941"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart9941",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "prescriptionmanager-9318",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart9941-9318-prescriptionmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8039",
                    "protocol": "tcp",
                    "hostPort": "8039"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart9941.local:27017/healthmonkstart9941_9318?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart9941.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart9941.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart9941.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart9941.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart9941.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart9941.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart9941.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart9941.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart9941"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart9941",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "workout-9318",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart9941-9318-workout:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8040",
                    "protocol": "tcp",
                    "hostPort": "8040"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart9941.local:27017/healthmonkstart9941_9318?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart9941.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart9941.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart9941.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart9941.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart9941.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart9941.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart9941.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart9941.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart9941"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart9941",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "sleeptrack-9318",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart9941-9318-sleeptrack:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8041",
                    "protocol": "tcp",
                    "hostPort": "8041"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart9941.local:27017/healthmonkstart9941_9318?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart9941.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart9941.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart9941.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart9941.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart9941.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart9941.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart9941.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart9941.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart9941"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart9941",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "healthmonkstart9941",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "healthmonkstart99410",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
