def cal ( weight , katat , price_gold ):
    
    try:
        weight = float(weight)
        katat = float(katat)
        price_gold = float(price_gold)
        
        pure_gold = ( weight * katat ) / 24
        
        value = (pure_gold * price_gold) / 40
        return value
    
    except ValueError:
        return "Please enter valid numbers for weight, karat, and price of gold."
    
    