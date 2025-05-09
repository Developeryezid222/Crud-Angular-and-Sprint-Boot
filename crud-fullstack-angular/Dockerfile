FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/crud-fullstack-angular-0.0.1.jar
COPY ${JAR_FILE} app-crud-fullstack-angular.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/app/crud-fullstack-angular.jar"]

