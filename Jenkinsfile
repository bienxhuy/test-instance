pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/bienxhuy/test-instance.git'
            }
        }

        stage('Deploy Environment') {
            steps {
                sh 'docker compose up -d'
                sh 'sleep 10' // wait for services to boot
            }
        }

        stage('Run Tests') {
            steps {
                sh 'echo Running tests...'
            }
        }

        stage('Teardown') {
            steps {
                sh 'docker compose down'
            }
        }
    }
}
