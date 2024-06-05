import json

# Define the input and output file paths
input_file_path = '/Users/aleksandergajowniczek/Downloads/response.json'
output_file_path = '/Users/aleksandergajowniczek/Downloads/ids.json'

# Read the JSON data from the input file
with open(input_file_path, 'r') as file:
    data = json.load(file)

# Extracting only the "id" and "name" fields from each league
extracted_data = [
    {
        "id": league["league"]["id"],
        "name": league["league"]["name"],
        "country": league["country"]["name"]
    } 
    for league in data["response"]
]
# Write the extracted data to the output file
with open(output_file_path, 'w') as file:
    json.dump(extracted_data, file, indent=4)

print(f"Extracted data has been written to {output_file_path}")
