import csv
import json

# 讀取CSV檔案並轉換為JSON格式
def csv_to_json(csv_file_path):
    data = []
    with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data.append(row)
    return json.dumps(data, ensure_ascii=False, indent=4)

# 簡單處理資料：計算某欄位的總和（假設欄位名稱為 'amount'）
def process_data(json_data):
    data = json.loads(json_data)
    total_amount = sum(float(item['amount']) for item in data if 'amount' in item)
    return total_amount

# 主程式
if __name__ == "__main__":
    csv_file_path = 'export1728375002.csv'
    
    # 轉換CSV為JSON
    json_data = csv_to_json(csv_file_path)
    print("JSON Data:")
    print(json_data)
    
    # 處理資料
    total_amount = process_data(json_data)
    print(f"\nTotal Amount: {total_amount}")