pipeline {
    agent any

    environment {
        IMAGE_NAME = "kadia08/gestion_compte"
        NODE_VERSION = "20"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/KadiataB/gestion_compte.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Installe les dépendances locales
                sh "npm ci"
            }
        }

        stage('Build Angular App') {
            steps {
                // Utilise npx pour lancer Angular CLI depuis node_modules
                sh "npx ng build --configuration production"
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
                    sh 'docker version'
                    sh 'docker info'
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

        // stage('Deploy') {
        //     steps {
        //         sh "docker compose down && docker compose up -d"
        //     }
        // }
        stage('Deploy') {
    steps {
        sh """
          docker stop gestion_compte || true
          docker rm gestion_compte || true
          docker run -d --name gestion_compte -p 8090:80 $IMAGE_NAME:${env.BUILD_NUMBER}
        """
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
