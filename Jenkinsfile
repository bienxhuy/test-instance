pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/bienxhuy/test-instance.git'
            }
        }

        // stage('Deploy Environment') {
        //     steps {
        //         bat 'docker compose up -d'
        //         bat 'sleep 10' // wait for services to boot
        //     }
        // }

        stage('Run Tests') {
            steps {
                bat 'echo Running tests...'
                bat 'npm run dev'
                bat 'sleep 30'
            }
        }

        // stage('Teardown') {
        //     steps {
        //         bat 'docker compose down'
        //     }
        // }
    }
}
