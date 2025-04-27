# makbulut-ecommerce
git clone -b develop https://github.com/makbulut1/makbulut-ecommerce.git
cd makbulut-ecommerce

![License](https://img.shields.io/github/license/kullaniciadi/makbulut-ecommerce)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

---

## Kurulum Talimatları

Bu proje, Medusa tabanlı mock verilerle çalışan bir frontend arayüzüdür. Aşağıdaki adımları izleyerek projeyi başlatabilirsiniz:

### Başlangıç

```bash
git clone -b develop https://github.com/makbulut1/makbulut-ecommerce.git
cd makbulut-ecommerce
npm install
npm run dev
```

### Uygulama Adresi

```bash
http://localhost:8000/tr
```

### Notlar

- Environment'a şu anlık ihtiyaç yoktur lakin backend'i aktif hale getirince açılacaktır.
- Bu versiyon backend bağımlılığı olacak şekilde tasarlanmaya girişilmiş ve henüz tamamlanmamıştır.
- Backend şeması ayrı bir `makbulut-ecommerce-backend` projesinde tanımlanacaktır.

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment. The pipeline is triggered on pushes to the `develop` branch and includes the following steps:

1. Code checkout from the develop branch
2. Node.js environment setup with Yarn caching
3. Dependencies installation
4. Application build
5. Secure file transfer to production server
6. Docker container deployment

### Required Secrets

The following secrets must be configured in your GitHub repository:

- `SERVER_HOST`: Production server hostname or IP
- `SERVER_USER`: SSH username for the production server
- `SERVER_SSH_KEY`: Private SSH key for authentication
- `NEXT_PUBLIC_MEDUSA_BACKEND_URL`: Medusa backend URL

### Deployment Process

1. The workflow automatically builds the Next.js application
2. Files are securely transferred to the production server
3. Existing Docker containers are stopped
4. New containers are built and started
5. System cleanup is performed to remove unused images

The application runs on port 8000 and includes health checks to ensure availability.

![License](https://img.shields.io/github/license/kullaniciadi/makbulut-ecommerce)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
