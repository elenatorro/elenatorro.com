
# Genuary 2025 Day 7

This piece has been done using ClickHouse, by running it directly in the ClickHouse client from the terminal.

## Grid 1


```sql
SELECT arrayStringConcat(groupArray(concat('\x1b[1;31;4', toString(if(mod(number, 8) in (0, 2, 4, 6, 8), 9, toInt32(randUniform(1,8)))), 'm   ', '\x1b[2;37;0m'))) FROM numbers(10000) format LineAsString
```

## Grid 2

```
SELECT splitByGroupArray(if(mod(number, 5) != 0, concat('\x1b[1;31;4', toString(if(mod(number, 8) in (0, 2, 4, 6, 8), 9, toInt32(randUniform(1,8)))), concat('m   '), '\x1b[2;37;0m'), '#')) FROM numbers(10000) format LineAsString
```

## Grid 3

```sql
SELECT
    arrayStringConcat(
        groupArray(
            concat(
                '\x1b[1;31;4',
                toString(if(mod(number, 8) in (0, 2, 4, 6, 8), 9, toInt32(randUniform(1,8)))),
                'm  ',
                '\x1b[2;37;0m'
            )
        )
    )
FROM numbers(3900)
FORMAT LineAsString;
```

## Grid 4 - Interactive

```
watch --color -n 1 "clickhouse-local --query=\"SELECT arrayStringConcat(groupArray(concat('\x1b[1;31;4', toString(if(mod(number, 8) in (0, 2, 4, 6, 8), 9, toInt32(randUniform(1,8)))), concat('m', repeat('  ', toInt8(randUniform(1, 1)))), '\x1b[2;37;0m'))) FROM numbers(10000) format LineAsString;\""
```