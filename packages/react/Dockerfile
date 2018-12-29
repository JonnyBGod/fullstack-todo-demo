FROM mhart/alpine-node:10 as builder

WORKDIR /src
COPY . .

RUN apk --update add make gcc g++ build-base python git
RUN npm i -g nps
RUN npm ci
RUN nps build

FROM mhart/alpine-node:10

WORKDIR /src

RUN npm i -g nps serve

COPY --from=builder /src/build/ .

ENTRYPOINT ["nps"]

CMD ["start"]
