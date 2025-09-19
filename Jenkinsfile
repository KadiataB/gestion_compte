pipeline {
    agent any

    environment {
        IMAGE_NAME = "kadia08/gestion_compte"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/KadiataB/gestion_compte.git'
            }
        }

        stage('Debug') {
            steps {
                script {
                    sh 'pwd'
                    sh 'ls -ld .'
                    sh 'whoami'
                    sh 'groups'
                    sh 'which docker'
                    sh '/usr/bin/docker version'
                    sh '/usr/bin/docker info'
                    sh 'ls -l /var/run/docker.sock'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME:${env.BUILD_NUMBER} ."
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds',
                                                 usernameVariable: 'DOCKER_USER',
                                                 passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                    sh "docker push $IMAGE_NAME:${env.BUILD_NUMBER}"
                }
            }
        }

        stage('Deploy') {
            steps {
                sh "docker compose down && docker compose up -d"
            }
        }
    } 

    post {
        success {
            echo "Déploiement réussi 🎉"
        }
        failure {
            echo "Erreur lors du déploiement ❌"
        }
    }
}

