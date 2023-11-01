From node:slim
#From hello-world
EXPOSE 8000

USER root 
# sources.list 교체 후 적용
RUN apt-get update
RUN apt-get upgrade -y
 
# container에 git 설치
RUN apt-get install git -y
 
# app 디렉토리 선정
CMD mkdir myapp
RUN git clone https://github.com/cdgri/myapp.git /myapp
CMD node /myapp/app.js
