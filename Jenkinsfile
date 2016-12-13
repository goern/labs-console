node {
  stage ('Code Checkout') {
     git url: 'https://github.com/rht-labs/labs-console', branch: 'master'
  }

  stage ('Build App') {
    echo 'Using build tool: node-4'
    def toolHome = tool 'node-4'
    sh "${toolHome}/bin/npm install"
    sh "${toolHome}/bin/npm run test"
  }


  stage ('Build Image and Deploy to Dev') {
    echo 'No buildImageCommands, using default OpenShift image build and deploy'
    openshiftBuild apiURL: 'master1.c2.core.rht-labs.com:8443', authToken: $OPENSHIFT_API_TOKEN, bldCfg: 'labs-console-nodejs', checkForTriggeredDeployments: 'true', namespace: 'labs-console-dev', showBuildLogs: 'true', waitTime: '3600000'
    openshiftVerifyDeployment apiURL: 'master1.c2.core.rht-labs.com:8443', authToken: $OPENSHIFT_API_TOKEN, depCfg: 'labs-console-nodejs', namespace: 'labs-console-dev'
  }

  stage ('Deploy to labs-console-uat') {
    input 'Deploy to labs-console-uat?'
    openshiftTag apiURL: 'master1.c2.core.rht-labs.com:8443', authToken: $OPENSHIFT_API_TOKEN, destStream: 'labs-console-nodejs', destTag: 'latest', destinationAuthToken: $OPENSHIFT_API_TOKEN, destinationNamespace: 'labs-console-uat', namespace: 'labs-console-dev', srcStream: 'labs-console-nodejs', srcTag: 'latest'
    openshiftVerifyDeployment apiURL: 'master1.c2.core.rht-labs.com:8443', authToken: $OPENSHIFT_API_TOKEN, depCfg: 'labs-console-nodejs', namespace: 'labs-console-uat'
  }

  stage ('Deploy to labs-console-delivery') {
    input 'Deploy to labs-console-delivery?'
    openshiftTag apiURL: 'master1.c2.core.rht-labs.com:8443', authToken: $OPENSHIFT_API_TOKEN, destStream: 'labs-console-nodejs', destTag: 'latest', destinationAuthToken: $OPENSHIFT_API_TOKEN, destinationNamespace: 'labs-console-delivery', namespace: 'labs-console-uat', srcStream: 'labs-console-nodejs', srcTag: 'latest'
    openshiftVerifyDeployment apiURL: 'master1.c2.core.rht-labs.com:8443', authToken: $OPENSHIFT_API_TOKEN, depCfg: 'labs-console-nodejs', namespace: 'labs-console-delivery'
  }
}