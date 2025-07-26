# Azure Static Web Apps Deployment Guide

This guide explains how to deploy your Next.js Weather App to Azure Static Web Apps using modern best practices.

## 🚀 Why Azure Static Web Apps?

- **Global CDN**: Your weather app loads instantly worldwide
- **Hybrid Rendering**: Supports Next.js API routes with serverless functions  
- **Cost-Effective**: Free tier available, minimal costs at scale
- **Zero Configuration**: Native GitHub integration
- **Modern Next.js Support**: Full support for App Router, SSR, and API routes

## 📋 Prerequisites

1. **Azure Account**: [Sign up for free](https://azure.microsoft.com/free/)
2. **GitHub Account**: Your code is already on GitHub
3. **Azure CLI** (optional): `brew install azure-cli`

## 🔧 Deployment Steps

### Step 1: Create Azure Static Web App

1. **Log in to Azure Portal**: [portal.azure.com](https://portal.azure.com)

2. **Create Resource**:
   - Search for "Static Web Apps"
   - Click "+ Create"

3. **Configure Basic Settings**:
   ```
   Subscription: Your subscription
   Resource Group: Create new "weather-app-rg"
   Name: weather-app-[your-name]
   Plan Type: Free
   Region: Central US (or closest to your users)
   ```

4. **Configure Deployment**:
   ```
   Source: GitHub
   Organization: Your GitHub username
   Repository: weather-app
   Branch: master
   Build Presets: Next.js
   App location: /
   Api location: (leave empty)
   Output location: out
   ```

5. **Review + Create** → **Create**

### Step 2: Automatic GitHub Integration

Azure automatically:
- ✅ Creates a GitHub Actions workflow
- ✅ Adds deployment secrets to your repository
- ✅ Triggers the first build and deployment

### Step 3: Monitor Deployment

1. **Check GitHub Actions**:
   - Go to your repository
   - Click "Actions" tab
   - Monitor the deployment workflow

2. **View Live App**:
   - Azure will provide a URL like: `https://brave-sea-0a1b2c3d4.azurestaticapps.net`
   - Your weather app will be live in ~5 minutes

## 🔧 Configuration Files

### `staticwebapp.config.json`
```json
{
  "routes": [
    {
      "route": "/api/*",
      "allowedRoles": ["anonymous"]
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*", "/assets/*", "/api/*"]
  }
}
```

### `next.config.ts`
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: 'out'
};
```

## 🌐 Custom Domain (Optional)

1. **Add Custom Domain**:
   ```bash
   az staticwebapp hostname set \
     --name weather-app-[your-name] \
     --hostname www.yourweatherdomain.com
   ```

2. **SSL Certificate**: Automatically provided by Azure

## 📊 Monitoring & Logs

1. **Application Insights**: Automatically enabled
2. **Function Logs**: Available in Azure Portal
3. **GitHub Actions**: Monitor deployments

## 💰 Costs

- **Free Tier**: 
  - 100GB bandwidth/month
  - 0.5GB storage
  - Perfect for personal projects

- **Standard Tier**: $9/month
  - 100GB bandwidth/month  
  - 0.5GB storage
  - Custom domains
  - SLA support

## 🔄 Updates & CI/CD

Every push to `master` branch automatically:
1. Triggers GitHub Actions
2. Builds your Next.js app
3. Deploys to Azure Static Web Apps
4. Updates your live site

## 🛠️ Troubleshooting

### Build Failures
```bash
# Check build locally
npm run build

# Check GitHub Actions logs
# Go to repository → Actions → Latest workflow
```

### API Routes Not Working
- Ensure `staticwebapp.config.json` is configured correctly
- Check Azure Functions logs in portal

### 404 Errors
- Verify `navigationFallback` in `staticwebapp.config.json`
- Ensure `output: 'export'` in `next.config.ts`

## 🎯 Performance Tips

1. **Image Optimization**: Already configured with `unoptimized: true`
2. **Caching**: Handled automatically by Azure CDN
3. **Compression**: Automatic gzip/brotli compression
4. **Global Distribution**: 130+ edge locations worldwide

## 🔐 Security

- **HTTPS**: Enforced by default
- **Custom Headers**: Configured in `staticwebapp.config.json`
- **CORS**: Handled in Next.js config
- **DDoS Protection**: Built-in

## 📞 Support

- **Azure Documentation**: [docs.microsoft.com](https://docs.microsoft.com/azure/static-web-apps/)
- **GitHub Issues**: Report deployment issues
- **Azure Support**: Available with paid plans

---

Your Weather App is now deployed with enterprise-grade performance, security, and reliability! 🌤️