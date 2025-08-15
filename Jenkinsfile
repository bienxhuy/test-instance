pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/bienxhuy/test-instance.git'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'echo Running tests...'
                bat 'npm -v'
                bat 'sleep 30'
            }
        }
    }
}
