FROM node:22-alpine AS base

FROM base AS builder
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

WORKDIR /app
RUN npm install --global pnpm@latest
RUN pnpm add -g turbo
COPY . .
RUN turbo prune --scope=web --docker

FROM base AS installer

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install --global pnpm@latest

WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm i

RUN pnpm turbo run build --filter=web...

FROM base AS runner

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install --global pnpm@latest

WORKDIR /app

COPY --from=installer /app .
# COPY --from=installer /app/apps/web/.next/standalone ./
# COPY --from=installer /app/apps/web/.next/static ./apps/web/.next/static
# COPY --from=installer /app/apps/web/public ./apps/web/public
WORKDIR /app/apps/web

EXPOSE 3000

ENV HOST=0.0.0.0

# CMD node apps/web/server.js

CMD ["pnpm", "dev", "--hostname", "0.0.0.0", "--port", "3000"]

# CMD ["cd", "./apps/web/", "&&","pnpm", "dev", "--hostname", "0.0.0.0"]

# CMD HOSTNAME="0.0.0.0" node ./apps/web/.next/standalone/apps/web/server.js