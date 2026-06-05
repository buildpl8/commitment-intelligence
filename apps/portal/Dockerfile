FROM ortussolutions/commandbox:lucee5

WORKDIR /app
COPY . /app
EXPOSE 8888
CMD ["box", "server", "start", "host=0.0.0.0", "port=8888", "directory=/app", "rewritesEnable=false", "openbrowser=false"]
