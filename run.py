import socket,os

def get_local_ip():
    try:
        # Creating a socket object
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

        # Connecting to a well-known server to get the local IP address
        s.connect(("8.8.8.8", 80))

        # Getting the local IP address
        local_ip = s.getsockname()[0]

        return local_ip
    except Exception as e:
        print(f"Error getting local IP: {e}")
        return None

def write_to_file(file_path, data):
    try:
        with open(file_path, 'w') as file:
            file.write(data)
        print(f"Data written to {file_path} successfully.")
    except Exception as e:
        print(f"Error writing to file: {e}")


# Example usage
local_ip_address = get_local_ip()


if local_ip_address:
        write_to_file('CONST_VARS.js', f'export const BACKEND_API = "http://{local_ip_address}:5000"')



os.system("sudo docker compose up --build")

