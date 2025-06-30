FROM node:20

WORKDIR /app

# Step 1: Copy only package.json and package-lock.json
COPY frontend/package*.json ./

# Step 2: Install dependencies (this includes vite)
RUN npm install

# Step 3: Copy the rest of your frontend source files (including vite.config.ts)
COPY frontend/ .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

