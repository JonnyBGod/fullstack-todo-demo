FROM mhart/alpine-node:10 as builder

WORKDIR /src
COPY . .

RUN apk --update add make gcc g++ build-base python git
RUN npm ci

FROM mhart/alpine-node:10

WORKDIR /src

RUN npm i -g nps

COPY --from=builder /src/ .

ENTRYPOINT ["nps"]

CMD ["start"]
