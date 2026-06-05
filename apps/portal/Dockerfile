FROM ortussolutions/commandbox:lucee5

WORKDIR /app
COPY . /app
EXPOSE 8888
CMD ["box", "server", "start", "--console", "host=0.0.0.0", "port=8080", "openBrowser=false"]
