pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/GANESAN-7/fullstack-jenkins-project.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                sh 'cd backend && npm install'
            }
        }

        stage('Start Backend') {
            steps {
                sh 'nohup node backend/server.js > backend.log 2>&1 &'
            }
        }

        stage('Start Frontend') {
            steps {
                sh 'nohup npx serve frontend -l 3000 > frontend.log 2>&1 &'
            }
        }

    }
}
