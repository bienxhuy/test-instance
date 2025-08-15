pipeline {
    agent any

    environment {
        TEST_INSTANCE_DIR = 'test-instance'
        LOG_COLLECTOR_DIR = 'log-collector'
        TEST_FRAMEWORK_DIR = 'test-framework'
    }

    stages {
        stage('Setup Env Files') {
            steps {
                dir("${TEST_FRAMEWORK_DIR}") {
                    writeFile file: '.env', text: """
                    BASE_URL=${BASE_URL}
                    LOG_DIR=${LOG_DIR}
                    SCREENSHOT_DIR=${SCREENSHOT_DIR}
                    LOG_COLLECTOR_HOST=${LOG_COLLECTOR_HOST}
                    LOG_COLLECTOR_PORT=${LOG_COLLECTOR_PORT}
                    """
                }
                dir("${LOG_COLLECTOR_DIR}") {
                    writeFile file: '.env', text: """
                    INFLUX_HOST=${INFLUX_HOST}
                    INFLUX_TOKEN=${INFLUX_TOKEN}
                    INFLUX_DATABASE=${INFLUX_DATABASE}
                    TABLE_NAME=${TABLE_NAME}
                    LOG_COLLECTOR_HOST=${LOG_COLLECTOR_HOST}
                    LOG_COLLECTOR_PORT=${LOG_COLLECTOR_PORT}
                    """
                }
            }
        }

        stage('Checkout Test Instance') {
            steps {
                git branch: 'master', url: 'https://github.com/bienxhuy/test-instance.git'
            }
        }

        stage('Checkout Log Collector') {
            steps {
                dir("${LOG_COLLECTOR_DIR}") {
                    git branch: 'master', url: 'https://github.com/bienxhuy/log-collector.git', credentialsId: 'log-collector-cred'
                }
            }
        }

        stage('Checkout Test Framework') {
            steps {
                dir("${TEST_FRAMEWORK_DIR}") {
                    git branch: 'dev', url: 'https://github.com/bienxhuy/devtest.git'
                }
            }
        }

        stage('Start Product') {
            steps {
                dir("${TEST_INSTANCE_DIR}") {
                    bat 'npm install'
                    bat 'start /B npm run dev'
                }
            }
        }

       stage('Start Log Collector') {
            steps {
                dir("${LOG_COLLECTOR_DIR}") {
                    bat 'start "" /B pythonw log-collector.py'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir("${TEST_FRAMEWORK_DIR}") {
                    bat 'pytest -q'
                }
            }
        }
    }

    post {
        always {
            echo 'Stopping services and cleaning up...'
            bat 'taskkill /F /IM python.exe || exit 0'
            bat 'taskkill /F /IM node.exe || exit 0'
            cleanWs()
        }
    }
}
