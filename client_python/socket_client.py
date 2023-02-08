import socket

def client_program():
    host = input("Enter IP Address: ")
    # host = "192.168.43.18"
    port = 1234  # socket server port number

    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # instantiate
    client_socket.connect((host, port))  # connect to the server

    message = ""

    while True:
        data = client_socket.recv(128).decode("utf-8")  # receive response
        print("received from server: " + data)  # show in terminal
        if (message == 'Bye'):
            client_socket.close()  # close the connection
            break
        message = input("> ")
        client_socket.send(message.encode("utf-8"))  # send message

if __name__ == '__main__':
    client_program()