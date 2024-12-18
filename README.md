# Docker It All  
A one-stop collection of Docker Compose configurations for various services.  

## Overview  
`docker-it-all` is a centralized repository for Docker Compose files that help you deploy popular services with minimal effort. Whether you're setting up a web server with Nginx, a database with MySQL, or experimenting with Windows containers, this repository has got you covered.  

## Services Included  
- **Nginx**: A powerful reverse proxy and web server.  
- **MySQL**: A reliable and widely-used relational database.  
- **Redis**: An in-memory key-value store for caching and more.  
- [TODO]**Open WebUI**: A user-friendly web-based interface for managing AI models, with built-in support for **Ollama** to run local large language models.  
- [TODO]**Windows Containers**: Experiment with Windows-based Docker containers.  
- And more to come!  

## How to Use  
1. Clone the repository:  
   ```bash
   git clone https://github.com/ChHsiching/docker-it-all.git
   cd docker-it-all
   ```  
2. Navigate to the directory of the service you want to deploy (e.g., `nginx/`, `mysql/`).  
3. Run the Docker Compose command:  
   ```bash
   docker-compose up -d
   ```  
   or:
   ```bash
   chmod +x start.sh
   ./start.sh
   ```

## Contribution  
Feel free to contribute additional Docker Compose configurations or improve the existing ones. Open a pull request or start a discussion in the issues section.  

## Acknowledgments

This project makes use of the following AUR package:

- [open-webui](https://aur.archlinux.org/packages/open-webui) by [mistersmee](https://aur.archlinux.org/account/mistersmee)

This project also integrates the following open-source tool:

- **Dockerized Windows System**: A containerized version of Windows for development and testing.  
  - Source: [dockur/windows](https://github.com/dockur/windows)  

Special thanks to the contributors for their work on these projects!

---

Get ready to **Docker It All**! 🚀
