FROM node:22-alpine AS base

FROM base AS builder
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
# Set working directory
WORKDIR /app
RUN npm install --global pnpm@latest
RUN pnpm add -g turbo nodemon
COPY . .
RUN turbo prune --scope=docs --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install --global pnpm@latest 

RUN pnpm add -g turbo nodemon dotenv dotenv-cli

WORKDIR /app

# First install dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm i

RUN pnpm turbo run build --filter=docs...

FROM base AS runner

ENV NEXT_TELEMETRY_DISABLED=1

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install --global pnpm@latest

RUN pnpm add -g dotenv dotenv-cli

WORKDIR /app

COPY --from=installer /app .
# COPY --from=installer /app/apps/docs/.next/standalone ./
# COPY --from=installer /app/apps/docs/.next/static ./static
# COPY --from=installer /app/apps/docs/public ./public
WORKDIR /app/apps/docs

EXPOSE 3001

ENV PORT=3001

# CMD cd apps/docs/ && pnpm dev

# CMD ["pnpm", "dev", "--port", "3001"]

CMD ["pnpm", "dev", "--hostname", "0.0.0.0", "--port", "3001"]

# CMD ["cd", "./apps/docs/", "&&","pnpm", "dev", "--hostname", "0.0.0.0"]

# CMD HOSTNAME="0.0.0.0" node ./apps/docs/.next/standalone/apps/docs/server.js