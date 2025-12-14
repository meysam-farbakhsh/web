FROM nginx:alpine

COPY ./index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



HEALTHCHECK \ 
	--interval=30s \ 
	--timeout=5s \
	--retries=3 \
  CMD wget -qO- http://localhost || exit 1
