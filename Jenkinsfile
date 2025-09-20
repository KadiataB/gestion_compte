pipeline {
    agent {
        docker {
            image "node:20"
        }
    }

    environment {
        IMAGE_NAME = "kadia08/gestion_compte"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/KadiataB/gestion_compte.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // sh "mkdir -p ~/.npm && chown -R \$(whoami) ~/.npm"
                // sh "npm install -g @angular/cli"
                sh "npm ci"
            }
        }

        // stage('Build Angular App') {
        //     steps {
        //         sh "ng build --configuration production"
        //     }
        // }
        stage('Build Angular App') {
            steps {
                sh "npx ng build --configuration production"
            }
        }

        stage('Debug') {
            steps {
                sh 'which docker || echo "Docker not installed in this container"'
                sh 'ls -l /var/run/docker.sock || echo "No docker.sock access"'
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
                sh "docker compose down || docker-compose down"
                sh "docker compose up -d || docker-compose up -d"
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
